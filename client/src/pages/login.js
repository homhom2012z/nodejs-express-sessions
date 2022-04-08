import axios from "../../axios.config";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Text,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const toast = useToast();

  const [show, setShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => setShow(!show);

  const login = async ({ username, password }) => {
    return await axios
      .post(`/login`, {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsSuccess(true);
          toastStatus(true);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setIsSuccess(false);
          toastStatus(false);
        }
      });
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/admin/dashboard");
    }
  }, [isSuccess]);

  const toastStatus = (status) => {
    if (status) {
      toast({
        title: "Login Successfully.",
        description: `The user has been logged in.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Can not loggin.",
        description: `Invalid username or password.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  function validateInput(value) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  return (
    <>
      <Box>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
          Login
        </Text>
        <hr />
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              login({
                username: values.username,
                password: values.password,
              });

              actions.setSubmitting(false);
              //   router.push("/users");
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="username" validate={validateInput}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                    mt={4}
                  >
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input {...field} id="username" placeholder="username" />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validateInput}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                    mt={2}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="password"
                        type={show ? "text" : "password"}
                        placeholder="password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                mr={2}
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
                size={"sm"}
              >
                Login
              </Button>
              <Button
                mt={4}
                colorScheme="gray"
                type="button"
                size={"sm"}
                onClick={() => {
                  router.back();
                }}
              >
                Back
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Login;
