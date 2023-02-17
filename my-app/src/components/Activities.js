import React, { useEffect, useState } from "react";
import { getActivities } from "../api/index.js";


export const Activities = () => {
  return (
    <div>
      <getActivities />
    </div>
  )
}

