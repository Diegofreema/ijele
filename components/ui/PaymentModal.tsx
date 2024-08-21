import { buyTicket } from '@/actions/data.action';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';
import {
  CompleteResponesProps,
  MonnifyProps,
  UserCancelledResponseProps,
  usePayWithMonnifyPayment,
} from 'react-monnify-ts';
type Props = {
  isOpen: boolean;
  onCloseFn: () => void;
  id: number;
  price: number;
};

export const PaymentModal = ({
  id,
  isOpen,
  onCloseFn,
  price,
}: Props): JSX.Element => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();
  const config: MonnifyProps = {
    amount: price,
    currency: 'NGN',
    reference: `${new String(new Date().getTime())}`,
    customerName: values.fullName,
    customerEmail: values.email,
    apiKey: process.env.NEXT_PUBLIC_MONNIFY!,
    contractCode: process.env.NEXT_PUBLIC_CONTRACT!,
    paymentDescription: 'Ticket purchase',
    metadata: {
      name: values.fullName,
    },

    customerPhoneNumber: values.phoneNumber,
  };

  const onLoadStart = () => {
    console.log('loading has started');
  };
  const onLoadComplete = () => {
    console.log('SDK is UP');
  };

  const testBuy = async () => {
    setSubmitting(true);
    try {
      const { message } = await buyTicket({
        email: values.email,
        name: values?.fullName,
        phone: values.phoneNumber,
        id,
      });

      console.log(message);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const onComplete = (res: CompleteResponesProps) => {
    //Implement what happens when the transaction is completed.
    setSubmitting(true);
    if (res?.status === 'SUCCESS') {
      buyTicket({
        email: values.email,
        name: values?.fullName,
        phone: values.phoneNumber,
        id,
      })
        .then((res) => {
          if (res?.message === 'failed') {
            toast({
              title: 'Transaction failed',
              description: 'Something went wrong, please try again later.',
              status: 'error',
              duration: 4000,
              position: 'top-right',
            });
          }

          if (res?.message === 'success') {
            toast({
              title: 'Ticket purchase complete.',
              description: 'Check your email for you ticket',
              status: 'success',
              duration: 4000,
              position: 'top-right',
            });
            setValues({
              email: '',
              fullName: '',
              phoneNumber: '',
            });
            onCloseFn();
          }
        })
        .catch((e) => {
          toast({
            title: 'Transaction failed',
            description: 'Something went wrong, please try again later.',
            status: 'error',
            duration: 4000,
            position: 'top-right',
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    }

    if (res?.status === 'FAILED') {
      toast({
        title: 'Transaction failed',
        description: 'Something went wrong, please try again later.',
        status: 'error',
        duration: 4000,
        position: 'top-right',
      });
    }
  };
  const onClose = (data: UserCancelledResponseProps) => {
    //Implement what should happen when the modal is closed here
    if (data?.paymentStatus === 'USER_CANCELLED') {
      toast({
        title: 'Transaction failed',
        description: 'User cancelled transaction',
        position: 'top-right',
        status: 'warning',
        duration: 3000,
      });
    }
  };
  const initializePayment = usePayWithMonnifyPayment(config);
  const onPay = () => {
    initializePayment(onLoadStart, onLoadComplete, onComplete, onClose);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const hasEmptyValues = Object.entries(values)
    .map(([key, value]) => value === '')
    .includes(true);
  return (
    <Modal isOpen={isOpen} onClose={onCloseFn}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Fill all fields</ModalHeader>
        <ModalCloseButton />
        <ModalBody gap={3} display={'flex'} flexDir={'column'}>
          <Input
            placeholder="Full name"
            name="fullName"
            value={values?.fullName}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Phone number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseFn}>
            Close
          </Button>
          {!hasEmptyValues && (
            <Button
              variant="ghost"
              onClick={testBuy}
              isLoading={submitting}
              loadingText="processing..."
            >
              Pay
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
