'use client'

import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import { sources } from 'next/dist/compiled/webpack/webpack'

interface CloudinaryResult {
    public_id: string
}

const UploadPage = () => {
  const [ imagePublicId, setImagePublicId ] = useState('');
    
  return (
    <>
        {imagePublicId &&
        <CldImage
            width="960"
            height="600"
            src={imagePublicId}
            sizes="100vw"
            alt="Description of my image"
        />
        }
        <CldUploadWidget 
            uploadPreset='uaoyhfmv'
            onShowCompleted ={(results, { widget }) => {
                const info = results.info as CloudinaryResult
                setImagePublicId(info.public_id)
            }}
            options={{
                sources: [ 'local' ],
                styles: {
                    palette: {
                        window: "#FFFFFF",
                        windowBorder: "#90A0B3",
                        tabIcon: "#0078FF",
                        menuIcons: "#5A616A",
                        textDark: "#000000",
                        textLight: "#FFFFFF",
                        link: "#0078FF",
                        action: "#FF620C",
                        inactiveTabIcon: "#0E2F5A",
                        error: "#F44235",
                        inProgress: "#0078FF",
                        complete: "#20B832",
                        sourceBg: "#314250"
                    },
                    fonts: {
                        default: {
                            active: true
                        }
                    }
                }
            }}
        >
            {({ open }) => (
                <button 
                    type='button'
                    className='btn btn-primary' 
                    onClick={() => open()}
                >
                    Upload
                </button>
            )}
        </CldUploadWidget>
    </>
  )
}

export default UploadPage