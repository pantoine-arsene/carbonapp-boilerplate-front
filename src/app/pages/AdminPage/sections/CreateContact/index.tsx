import {
  FormConfirmButton,
  FormElement,
  FormInput,
  FormLabel,
  FormTitle,
  FormWrapper,
} from '../FormComponents';

export function CreateContact() {
  return (
    <FormWrapper>
      <FormTitle>Créer un contact</FormTitle>
      <FormElement>
        <FormLabel>Nom</FormLabel> <FormInput />
      </FormElement>
      <FormElement>
        <FormLabel>Prénom</FormLabel> <FormInput />
      </FormElement>
      <FormElement>
        <FormLabel>Email</FormLabel> <FormInput />
      </FormElement>
      <FormElement>
        <FormLabel>Téléphone</FormLabel> <FormInput />
      </FormElement>
      <FormConfirmButton>Valider</FormConfirmButton>
    </FormWrapper>
  );
}
