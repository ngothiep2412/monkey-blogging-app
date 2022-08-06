import Layout from "components/layout/Layout";
import ContactBody from "module/contact/ContactBody";
import HomeBanner from "module/home/HomeBanner";
import React from "react";
import styled from "styled-components";
const HomePageStyles = styled.div``;
const ContactPage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <ContactBody></ContactBody>
      </Layout>
    </HomePageStyles>
  );
};

export default ContactPage;
