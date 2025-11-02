import React from 'react';
import { Stack } from '@components/ui/atoms';
import { Field } from '@chakra-ui/react';
const FormControl = Field.Root;
const FormLabel = Field.Label;
const FormErrorMessage = Field.ErrorText;
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input ref={ref} {...props} />
));
import { Select, createListCollection } from '@chakra-ui/react';
import { CreateProfileEntryFormProvider, useCreateProfileEntryFormContext } from './Provider';

interface CreateProfileEntryFormProps {
  onSubmit: (data: { linkedinUrn: string; gender: string }) => Promise<void>;
  isLoading: boolean;
}

const genderCollection = createListCollection({
  items: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" }
  ],
});

const FormContent: React.FC = () => {
  const { formik, generalError } = useCreateProfileEntryFormContext();

  return (
    <form id="profile-entry-form" onSubmit={formik.handleSubmit}>
      <Stack gap={6}>
        {generalError && (
          <FormControl invalid={!!generalError}>
            <FormErrorMessage>{generalError}</FormErrorMessage>
          </FormControl>
        )}
        
        <FormControl required invalid={!!formik.errors.linkedinUrn && formik.touched.linkedinUrn}>
          <FormLabel>LinkedIn URN</FormLabel>
          <Input 
            id="linkedinUrn"
            name="linkedinUrn"
            value={formik.values.linkedinUrn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter LinkedIn URN"
          />
          {formik.errors.linkedinUrn && formik.touched.linkedinUrn && (
            <FormErrorMessage>{formik.errors.linkedinUrn}</FormErrorMessage>
          )}
        </FormControl>
        
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select.Root
            value={formik.values.gender ? [formik.values.gender] : []}
            onValueChange={(details: { value: string[] }) => {
              formik.setFieldValue('gender', details.value[0] || '');
            }}
            collection={genderCollection}
          >
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select gender" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {genderCollection.items.map((item) => (
                  <Select.Item key={item.value} item={item}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </FormControl>
      </Stack>
    </form>
  );
};

export const CreateProfileEntryForm: React.FC<CreateProfileEntryFormProps> = (props) => {
  return (
    <CreateProfileEntryFormProvider {...props}>
      <FormContent />
    </CreateProfileEntryFormProvider>
  );
};