import { connectToDB } from "@/lib/connectDB";
import Rsvp from "@/models/Rsvp";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

await connectToDB();

// GET /api/rsvps
export async function GET() {
  try {
    const rsvpRecords = await Rsvp.find().lean();

    if (!rsvpRecords)
      return NextResponse.json(
        {
          success: false,
          message: "Rsvps Not Found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(
      {
        success: true,
        message: "Fetched successfully",
        data: rsvpRecords,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}

// POST /api/rsvps
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    console.log(data);

    // Validator
    // const result = await safeParseAsync(createRsvpSchema, data);
    // console.log("Validation result", result);
    // if (!result.success) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Validation error",
    //       context: result.error,
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // const parsedData = result.data;

    // is Rsvp with corresponding name exist
    // const isRsvpExist = await Rsvp.findOne({
    //   name: parsedData.name,
    //   email: parsedData.email,
    // });
    // if (isRsvpExist)
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: `${parsedData.name} already Exists!`,
    //     },
    //     {
    //       status: 409,
    //     }
    //   );

    // console.log("is Exist ", isRsvpExist);

    const rsvp = await Rsvp.create({
      name: data.name,
      countryCode: data.countryCode,
      contact: data.contact,
      email: data.email,
      attending: data.attending,
      members: data.members,
      familyDetails: data.familyDetails,
    });

    return NextResponse.json(
      {
        success: true,
        message: "RSVP Submitted!",
        data: rsvp,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
