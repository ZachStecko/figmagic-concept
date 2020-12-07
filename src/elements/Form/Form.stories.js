import React from 'react';
import Form from './Form';

import notes from './Form.description.md';

export default { title: 'Form', parameters: { notes } };

export const FormRegular = () => <Form>Text content inside form. This allows us to specify basic font styling but also infer the padding from the spacing between text and layout/rectangle element.</Form>;