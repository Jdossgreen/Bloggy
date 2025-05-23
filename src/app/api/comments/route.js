import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


//GET ALL COMMENTS OF A POST
export const GET = async (req) => {

    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    try {
        
        const comments = await prisma.comment.findMany({
          where: { 
            ...(postSlug && { postSlug }),
           },
          include: { user: true },
        });

        //Return Successful response
        return new NextResponse(
          JSON.stringify(comments, 
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      );

    } catch(err) {
        console.error(err);

        return new NextResponse(
          JSON.stringify({ message: "Something went wrong!" }), 
          {
              status: 500,
              headers: { 'Content-Type': 'application/json' }
          }
        );
    }
};

//CREATE A COMMENT
export const POST = async (req) => {

  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated" }), 
      {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
      const body = await req.json();
      const comment = await prisma.comment.create({
        data: { ...body, userEmail: session.user.email },
      });
        
      //Return Successful response
      return new NextResponse(
        JSON.stringify(comment, 
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

  } catch(err) {
      console.error(err);

      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }), 
        {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        }
      );
  }
};