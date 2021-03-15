import React from 'react'
const Error = ({ statusCode }: { statusCode?: number }): JSX.Element => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
