"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import classes from "./back.module.css";

export default function Back({ parent }) {
  const router = useRouter();

  return (
    <button className={classes.btn} onClick={() => router.push(parent)}>
      <FontAwesomeIcon icon={faArrowLeft} className={classes["icon-back"]} />
      Back
    </button>
  );
}
