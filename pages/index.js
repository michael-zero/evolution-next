import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';
import { Viewer } from 'react-pdf-viewer';
export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
    <div className={styles.container}>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
    <div>
      <Viewer
       fileUrl={""}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
    </div>
    </>
  )
}
