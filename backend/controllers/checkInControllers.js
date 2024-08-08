import asyncHandler from "express-async-handler";

export const submitTriageCheckIn = asyncHandler(async (req, res) => {
  const checkInData = await req.body;

  console.log(checkInData)

  res.status(200).json({message: "Check-in data submitted successfully"});
});
