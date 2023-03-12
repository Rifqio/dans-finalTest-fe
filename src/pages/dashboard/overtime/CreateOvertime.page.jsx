import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import OvertimeForm from '../../../components/overtime/OvertimeForm.component';

function CreateOvertimePage() {
  return (
    <>
      <Sidebar children={<OvertimeForm />} />
    </>
  );
}

export default CreateOvertimePage;
