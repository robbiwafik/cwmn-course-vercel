import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

interface Props {
    name: string
}

const WelcomeTemplate = ({ name } : Props) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
            <Body className='bg-slate-100'>
                <Container>
                    <Text className='font-bold text-3xl'>Hello {name}</Text>
                    <Link href='https://google.com'>www.google.com</Link>
                </Container>
            </Body>
          </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: '#fff'
};

const text: CSSProperties = {
  fontSize: '35px'
}

export default WelcomeTemplate