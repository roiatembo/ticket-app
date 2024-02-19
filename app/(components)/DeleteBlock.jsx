"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";

const DeleteBlock = () => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    // <FontAwesomeIcon icon={faX} className='text-red-400 hover:cursor-pointer hover:text-red-200' />
    <span
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    >
      Delete
    </span>
  );
};

export default DeleteBlock;
