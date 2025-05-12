import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


//GET SINGLE POST
export const GET = async (req, {params}) => {

  const {slug} = params

    try {
        
        const post = await prisma.post.findUnique({
          where: { slug },
          include: { user: true },
        });

        //Return Successful response
        return new NextResponse(
          JSON.stringify(post), 
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
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