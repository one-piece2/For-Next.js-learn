import { NextRequest } from "next/server";
import { withApiHandler } from "@/utils/withApiHandler";
import { error, success } from "@/utils/apiResponse";
import clientPromise from "@/lib/mongodb";
import { DB_NAME, BUSINESS_STATUS_CODE } from "@/config/constants";

export const DELETE = withApiHandler(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return Response.json(
      error("Id is required", BUSINESS_STATUS_CODE.WARNING),
      {
        status: 400,
      }
    );
  }
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection("posts");
  const result = await collection.deleteOne({ id });
  
  if (result.deletedCount === 0) {
    return Response.json(
      error("Post not found", BUSINESS_STATUS_CODE.ERROR),
      {
        status: 404,
      }
    );
  }
  
  return Response.json(success({ deleted: true }), {
    status: 200,
  });
});
