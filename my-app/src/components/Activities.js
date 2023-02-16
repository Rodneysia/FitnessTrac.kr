import React, { useEffect, useState } from "react";
import { getActivities } from "../api";


export const Activities = () => {
  return (
    <div>
      <getActivities />
    </div>
  )
}

