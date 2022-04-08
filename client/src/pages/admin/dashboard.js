import axios from "../../../axios.config";
import { useRouter } from "next/router";
import { Box, Button, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  const toast = useToast();

  const logout = async () => {
    return await axios
      .post("/logout")
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Logged Out Successfully.",
            description: `The user has been logged in.`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          router.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("/dashboard")
      .then((res) => {
        if (res.status === 200) {
          router.push("/admin/dashboard");
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        }
      });
  }, []);
  return (
    <>
      <pre>This is a dashboard</pre>
      <Box mt={2} mb={2}>
        <Button type={"button"} onClick={logout}>
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
