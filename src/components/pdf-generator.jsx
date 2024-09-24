import logo from "../assets/boy.jpg";
import React from "react";
import font from "../font/Poppins-Medium.ttf";
import Html from "react-pdf-html";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Image,
  Font,
} from "@react-pdf/renderer";
import { grey } from "@mui/material/colors";
Font.register({
  family: "Poppins",
  src: font,
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  head: {
    fontFamily: "Poppins",
    color: "violet",
  },
  subHead: {
    fontFamily: "Poppins",
    color: "green",
  },
  globalFont: {
    fontFamily: "Poppins",
  },
  singleItemWrap: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    paddingBottom: 40,
    fontFamily: "Poppins",
  },

  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
  },
  line: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
  },
  logo: {
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "#0a7386",
    padding: 10,
    textAlign: "center",
  },
  pdfHeaderWrap: {
    color: "#0a7386",
    fontSize: 15,
    marginBottom: 10,
  },
  firstPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
    justifyContent: "center",
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  borderBotttom: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: 100,
    height: 10,
    backgroundColor: grey,
  },

  // CSS
  dataItem: {
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    marginLeft: -4,
  },
  flexData: {
    display: "flex",
    gap: 10,
    fontSize: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  flexDataWhy: {
    display: "flex",
    gap: 10,
    fontSize: 12,
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexItems: {
    display: "flex",
    gap: 10,
    fontSize: 12,
    marginBottom: 10,
    flexDirection: "row",
    color: "violet",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  datadescription: {
    display: "flex",
    gap: 10,
    fontSize: 12,
    marginBottom: 10,
    flexDirection: "column",
  },
  htmlData: {
    fontSize: 12,
  },
});

const PDFGenerator = ({ data }) => {
  return (
    <Document>
      <Page style={styles.firstPage} size="A4">
        <View style={styles.pdfHeaderWrap}>
          <Text style={styles.title}>
            LUXEL TRAVELS: Time to Shape the Future of Travel
          </Text>
        </View>
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page
        size="A4"
        wrap
        style={{
          paddingBottom: "10%",
          paddingTop: "10%",
          borderTop: "2px solid black",
        }}
      >
        {data?.map((item, ind) => {
          return (
            <View key={ind} style={styles.singleItemWrap}>
              <Text style={styles.dataItem}>
                {ind + 1}. {item?.title}
              </Text>
              <View style={styles.flexData}>
                <Text style={styles.head}>ID : </Text>
                <Text style={styles.subHead}>{item?._id}</Text>
              </View>
              <View style={styles.flexData}>
                <Text style={styles.head}>Title : </Text>
                <Text style={styles.subHead}>{item?.title}</Text>
              </View>
              <View style={styles.flexData}>
                <Text style={styles.head}>vendorId : </Text>
                <Text style={styles.subHead}>{item?.vendorId}</Text>
              </View>
              <View style={styles.datadescription}>
                <Text style={styles.head}>description : </Text>
                <Html style={styles.subHead}>{item?.description}</Html>
              </View>
              {item?.address && item?.address !== "" && (
                <View style={styles.flexData}>
                  <Text style={styles.head}>Address : </Text>
                  <Text style={styles.subHead}>{item?.address}</Text>
                </View>
              )}
              {item?.memberShip && item?.memberShip !== "" && (
                <View style={styles.flexData}>
                  <Text style={styles.head}>MemberShip :</Text>
                  <Text style={styles.subHead}>{item?.memberShip}</Text>
                </View>
              )}
              {item?.duration && item?.duration?.length > 0 && (
                <View style={styles.flexData}>
                  <Text style={styles.head}>Durations : </Text>
                  <View style={styles.flexItems}>
                    {item?.duration?.map((singleItem, ind) => (
                      <React.Fragment key={ind}>
                        <Text style={styles.subHead}>
                          {singleItem}
                          {ind < item.duration.length - 1 && ","}
                        </Text>
                      </React.Fragment>
                    ))}
                  </View>
                </View>
              )}
              {item?.storyLineKeywords &&
                item?.storyLineKeywords?.length > 0 && (
                  <View style={styles.flexData}>
                    <Text style={styles.head}>StoryLine Keywords : </Text>
                    <View style={styles.flexItems}>
                      {item?.storyLineKeywords?.map((singleItem, ind) => (
                        <React.Fragment key={ind}>
                          <Text style={styles.subHead}>
                            {singleItem}{" "}
                            {ind < item.storyLineKeywords.length - 1 && ","}
                          </Text>
                        </React.Fragment>
                      ))}
                    </View>
                  </View>
                )}
              {item?.price && item?.price?.length > 0 && (
                <View style={styles.flexData}>
                  <Text style={styles.head}>Prices : </Text>
                  <View style={styles.flexItems}>
                    {item?.price?.map((singleItem, ind) => (
                      <React.Fragment key={ind}>
                        <Text style={styles.subHead}>
                          {singleItem} {ind < item.price.length - 1 && ","}
                        </Text>
                      </React.Fragment>
                    ))}
                  </View>
                </View>
              )}
              {item?.linkWithOtherExperience &&
                item?.linkWithOtherExperience?.length > 0 && (
                  <View style={styles.flexData}>
                    <Text style={styles.head}>Other Experiences : </Text>
                    <View>
                      {item?.linkWithOtherExperience?.map((singleItem, ind) => (
                        <View key={ind}>
                          <View style={styles.flexData}>
                            <Text style={styles.head}>ExperienceId :</Text>
                            <Text style={styles.subHead}>
                              {singleItem?.experienceId}
                            </Text>
                          </View>
                          <View style={styles.flexData}>
                            <Text style={styles.head}>ExperienceName :</Text>
                            <Text style={styles.subHead}>
                              {singleItem?.experienceName}
                            </Text>
                          </View>
                          <View style={styles.flexDataWhy}>
                            <Text style={styles.head}>Why :</Text>
                            <Text style={styles.subHead}>
                              {singleItem?.why}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
            </View>
          );
        })}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFGenerator;
