import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async (req) => {

  const {searchParams} = new URL(req.url)

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && {catSlug: cat }),
    },
    include: {
      cat: true, // Include category data (title, slug, etc.)
    },
  };

    try {
        //Fetch posts from the database
        const [posts, count] = await prisma.$transaction([
          prisma.post.findMany(query),
          prisma.post.count({where: query.where}),
        ]);        
        

        //Return Successful response
        return new NextResponse(
          JSON.stringify({posts, count}), 
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