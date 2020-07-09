import _Head from 'next/head'

export const Head = ({ title }) => {
  return (
    <_Head>
      <title>{title}</title>
    </_Head>
  )
}
