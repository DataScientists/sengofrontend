import React from 'react';
import { Button } from '@components/ui/atoms';
import { Dialog } from '@chakra-ui/react';
import { CreateProfileEntryForm } from '@components/features/organisms/Forms/CreateProfileEntryForm';

interface CreateProfileEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { linkedinUrn: string; gender: string }) => Promise<void>;
  isLoading: boolean;
}

export const CreateProfileEntryModal: React.FC<CreateProfileEntryModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading
}) => {

  return (
    <Dialog.Root open={isOpen} onOpenChange={({ open }) => !open && onClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Create Profile Entry</Dialog.Title>
            <Dialog.CloseTrigger />
          </Dialog.Header>
          <Dialog.Body>
            <CreateProfileEntryForm 
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button 
              colorScheme="blue" 
              form="profile-entry-form"
              type="submit"
              loading={isLoading}
            >
              Create
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};



