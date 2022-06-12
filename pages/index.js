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
      <Viewer fileUrl={"https://lifeplace-app.s3.sa-east-1.amazonaws.com/generic/96d3e4ae-d9c3-4ee6-a067-ce291001838f.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T123928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAUB7NMU6MV7DOROAH%2F20220610%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=58b8c74614e9d8a73f6e945c4b23b0d673ef67c6d586dacdc55c48085bf8e04d"}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
    </div>
    </>
  )
}
