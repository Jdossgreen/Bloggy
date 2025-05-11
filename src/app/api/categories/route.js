import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        //Fetch categories from the database
        const categories = await prisma.category.findMany()

        //Return Successful response
        return new NextResponse(
          JSON.stringify(categories), 
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