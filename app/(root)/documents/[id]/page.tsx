import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import CollaborativeRoom from '@/components/CollaborativeRoom'

const Documents = () => {
    return (
        <div className='flex w-full flex-col items-center'>
            <CollaborativeRoom

            />
        </div>
    )
}

export default Documents