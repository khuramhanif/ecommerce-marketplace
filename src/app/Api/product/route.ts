import { NextResponse } from "next/server";
import { SanityClient, createClient } from "next-sanity";

const client : SanityClient = createClient({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2023-08-03",
  useCdn: false
})

export async function GET() {
    try {
        let response =  await client.fetch(`*[_type == "product"]`)
        console.log(response)
        return NextResponse.json({response})
    } catch (error) {
        console.log((error as {message:string}).message)
        return NextResponse.json({"error":error})
    }
}