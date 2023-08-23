// verification-token - only if you use email provider

export const VerificationTokenSchema =  {
    name: 'verification-token',
    title: 'Verification Token',
    type: 'document',
    fields: [
      {
        name: 'identifier',
        title: 'Identifier',
        type: 'string'
      },
      {
        name: 'token',
        title: 'Token',
        type: 'string'
      },
      {
        name: 'expires',
        title: 'Expires',
        type: 'datetime'
      }
    ]
  };