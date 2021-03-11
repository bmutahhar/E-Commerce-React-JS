import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import CustomTextField from "./CustomTextField";
import commerce from "../../lib/commerce";

const AddressForm = () => {
  const [shippingCountries, setshippingCountries] = useState([]);
  const [shippingCountry, setshippingCountry] = useState("");
  const [shippingSubDivisions, setshippingSubDivisions] = useState([]);
  const [shippingSubDivision, setshippingSubDivision] = useState("");
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState([]);

  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <CustomTextField
              required
              name="firstName"
              label="First Name"
              variant="outlined"
            />
            <CustomTextField
              required
              name="lastName"
              label="Last Name"
              variant="outlined"
            />
            <CustomTextField
              required
              name="address"
              label="Address"
              variant="outlined"
            />
            <CustomTextField
              required
              name="email"
              label="Email"
              variant="outlined"
            />
            <CustomTextField
              required
              name="city"
              label="City "
              variant="outlined"
            />
            <CustomTextField
              required
              name="ZIP"
              label="ZIP"
              variant="outlined"
            />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me!
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping SubDivisions</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me!
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me!
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
