import './App.css'
import Form from "@rjsf/core"
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  title: 'Section 1',
  type: 'object',
  properties: {
    title: { type: 'string', title: 'Name' },
  },
};

function App() {
  return (
    <Form
      schema={schema}
      validator={validator}
    />
  )
}

export default App
