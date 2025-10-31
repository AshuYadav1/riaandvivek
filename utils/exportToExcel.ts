import { RSVP } from "@/app/(main)/horizonadmin/page";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const exportToExcel = async (
  data: RSVP[],
  fileName: string = "wed-attendance.xlsx"
) => {
  if (!data || data.length === 0) return;

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Attendees");

  worksheet.columns = [
    { header: "Name", key: "name", width: 40 },
    { header: "Age", key: "age", width: 10 },
    { header: "Country code", key: "countryCode", width: 15 },
    { header: "Contact", key: "contact", width: 15 },
    { header: "Email", key: "email", width: 35 },
    { header: "Attending", key: "attending", width: 10 },
    { header: "Member", key: "memberName", width: 20 },
    { header: "Age", key: "memberAge", width: 10 },
    { header: "country code", key: "memberCode", width: 15 },
    { header: "Contact", key: "memberContact", width: 20 },
  ];

  data.forEach(
    ({ name, age, countryCode, contact, email, attending, familyDetails }) => {
      const base = {
        name,
        age,
        countryCode,
        contact,
        email,
        attending,
      };

      if (!familyDetails || familyDetails.length === 0) {
        worksheet.addRow({ ...base });
      } else {
        familyDetails.forEach((member, index) => {
          worksheet.addRow({
            name: index === 0 ? name : "",
            age: index === 0 ? age : "",
            countryCode: index === 0 ? countryCode : "",
            contact: index === 0 ? contact : "",
            email: index === 0 ? email : "",
            attending: index === 0 ? attending : "",
            memberName: member.name,
            memberAge: member.age,
            memberCode: member.code,
            memberContact: member.contact ?? "",
          });
        });
      }
    }
  );

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
    cell.alignment = {
      vertical: "middle",
      horizontal: "left",
    };
  });

  worksheet.getColumn("age").alignment = { horizontal: "left" };
  worksheet.getColumn("memberAge").alignment = { horizontal: "left" };

  // 📦 Export to Excel
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, fileName);
};
