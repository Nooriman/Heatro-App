import {
  Button,
  Checkbox,
  FormControl,
  Heading,
  IconButton,
  Input,
  Stack,
  TextArea,
  Text,
  Divider,
  Select,
} from "native-base";

import Signature from "react-native-signature-canvas";
import { useState, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import ServicesList from "../data/ServicesList.json";

const CreateInvoice = () => {
  const ref = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const [isCashPayment, setIsCashPayment] = useState(true);

  const toggleButtons = (data) => {
    data === "cash" ? setIsCashPayment(true) : setIsCashPayment(false);
  };

  const RenderServicesList = () => {
    return (
      <View>
        <Select value={form}></Select>
      </View>
    );
  };

  const [form, setForm] = useState({
    name: "",
    address: "",
    postal: "",
    unit: "",
    services: [{ name: "Basic", cost: 20 }],
    testService: "",
    testCost: 0,
    totalCost: 0,
    description: "",
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Heading>Create Invoice</Heading>
          <FormControl isRequired mt={3}>
            <Stack>
              <FormControl.Label>Full Name</FormControl.Label>
              <Input
                type="text"
                backgroundColor="#fff"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.nativeEvent.text })}
              />
            </Stack>
          </FormControl>

          <FormControl isRequired mt={3}>
            <Stack>
              <FormControl.Label>Address</FormControl.Label>
              <Input
                type="text"
                backgroundColor="#fff"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.nativeEvent.text })
                }
              />
            </Stack>
          </FormControl>

          <Stack direction="row" mt={3} space={2} w="100%">
            <FormControl isRequired flex={1}>
              <Stack>
                <FormControl.Label>Unit #</FormControl.Label>
                <Input
                  type="number"
                  backgroundColor="#fff"
                  value={form.unit}
                  onChange={(e) =>
                    setForm({ ...form, unit: e.nativeEvent.text })
                  }
                />
              </Stack>
            </FormControl>

            <FormControl isRequired flex={1}>
              <Stack>
                <FormControl.Label>Postal Code</FormControl.Label>
                <Input
                  type="number"
                  backgroundColor="#fff"
                  InputRightElement={
                    <IconButton
                      variant="solid"
                      size="sm"
                      onPress={() => alert(form.postal)}
                    >
                      <FontAwesome name="search" size={16} color="white" />
                    </IconButton>
                  }
                  value={form.postal}
                  onChange={(e) =>
                    setForm({ ...form, postal: e.nativeEvent.text })
                  }
                />
              </Stack>
            </FormControl>
          </Stack>

          <FormControl isRequired mt={3}>
            <Stack>
              <FormControl.Label>Select Service(s)</FormControl.Label>
              <Stack direction="row" space={2} w="100%">
                <Select
                  value={form.testService}
                  placeholder="Choose Service"
                  style={styles.input_bg}
                  onChange={(itemValue) =>
                    setForm({ ...form, testService: itemValue })
                  }
                >
                  {ServicesList.map((service) => (
                    <Select.Item label={service.name} value={service.name} />
                  ))}
                </Select>
                <Input type="text" />
              </Stack>
              <Button
                style={styles.button_service}
                onPress={() => alert("hello")}
                variant="outline"
              >
                Add Service
              </Button>
            </Stack>
          </FormControl>

          <FormControl>
            <Stack>
              <FormControl.Label>Description</FormControl.Label>
              <TextArea
                h={20}
                backgroundColor="#fff"
                placeholder="Enter Description"
                onChange={(e) =>
                  setForm({ ...form, description: e.nativeEvent.text })
                }
              />
            </Stack>
          </FormControl>

          <FormControl>
            <Stack>
              <FormControl.Label>Attachment</FormControl.Label>
              <Button onPress={() => alert("open image")}>Upload Media</Button>
            </Stack>
          </FormControl>

          {/*  <FormControl>
            <Stack>
              <FormControl.Label>Signature</FormControl.Label>
              <View style={{ height: 200 }}>
                <Signature
                  ref={ref}
                  bgSrc="https://via.placeholder.com/300x200/ff726b"
                  onOK={(img) => console.log(img)}
                  onEmpty={() => console.log("empty")}
                  descriptionText="Sign Here"
                  clearText="Clear"
                  confirmText="Save"
                  autoClear
                  imageType={"image/svg+xml"}
                />
              </View>
            </Stack>
          </FormControl> */}

          <FormControl.Label style={{ marginTop: "5%" }}>
            Cost Breakdown
          </FormControl.Label>
          <View style={styles.cost_container}>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Text color="#353535">Total Cost</Text>
              <Text fontSize="2xl" bold color="#353535">
                $200.00
              </Text>
            </Stack>
          </View>

          <View>
            <FormControl.Label>Payment Mode</FormControl.Label>
            <Stack direction="row" space={4}>
              <Button
                flex={1}
                backgroundColor="tertiary.400"
                style={
                  isCashPayment ? styles.activeButton : styles.inactiveButton
                }
                onPress={() => toggleButtons("cash")}
              >
                Cash
              </Button>
              <Button
                flex={1}
                style={
                  !isCashPayment ? styles.activeButton : styles.inactiveButton
                }
                onPress={() => toggleButtons("paynow")}
              >
                PayNow
              </Button>
            </Stack>
          </View>

          <View style={{ marginTop: "5%" }}>
            <Checkbox my={2} value={1} onChange={(e) => console.log(e)}>
              I accept the terms & conditions
            </Checkbox>
            <Stack direction="row" space={4}>
              <Button
                variant="subtle"
                flex={1}
                onPress={() => alert("clear form")}
              >
                Clear
              </Button>
              <Button
                flex={1}
                isLoading={isLoading}
                isLoadingText="Submitting"
                spinnerPlacement="end"
                onPress={() => setIsLoading(!isLoading)}
              >
                Customer Signature
              </Button>
            </Stack>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateInvoice;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#f2f2f2",
    height: "100%",
  },
  input_bg: {
    backgroundColor: "#fff",
  },
  container: {
    height: "100%",
    paddingHorizontal: "5%",
    marginVertical: "5%",
  },
  cost_container: {
    marginBottom: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    borderColor: "#cdcdcd",
    borderWidth: "1",
    borderRadius: "5",
    backgroundColor: "#fff",
  },
  activeButton: {
    backgroundColor: "#007AFF",
  },
  inactiveButton: {
    backgroundColor: "#DDD",
  },
  button_service: {
    borderStyle: "dashed",
    borderWidth: 2,
  },
});
