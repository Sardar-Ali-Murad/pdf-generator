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
  page2: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins",
    paddingTop: 25,
    paddingHorizontal: 35,
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
  reportName: {
    textAlign: "center",
  },

  h4: {
    fontSize: 12,
  },
  contents: {
    marginBottom: 15,
    color: "#0a7386",
    fontSize: 14,
  },
  overviewWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  horizontalLine: {
    height: 2,
    width: "100%",
    backgroundColor: "#0a7386",
  },
  findHeader: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  summaryInfoWrapSummary: {
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  indexNumber: {
    fontSize: 14,
    color: "#0a7386",
    textDecoration: "underline",
  },
  findingsHeaderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  singleFindingsHeaderInfo: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  pdfHeaderWrap: {
    color: "#0a7386",
    fontSize: 15,
    marginBottom: 10,
  },
  singleFindingsHeaderInfoHeader: {
    fontSize: 12,
    color: "#0a7386",
  },
  singleFindingsHeaderInfoPara: {
    fontSize: 10,
  },

  firstPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
    justifyContent: "center",
  },
  overviewFields: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
  },
  pageStarter: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  h7: {
    fontSize: 8,
    fontFamily: "Poppins",
  },
  pageStarterLogo: {
    width: 40,
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
                <Text style={styles.globalFont}>ID: {item?._id}</Text>
              </View>
              <View style={styles.flexData}>
                <Text style={styles.globalFont}>Title: {item?.title}</Text>
              </View>
              <View style={styles.flexData}>
                <Text style={styles.globalFont}>
                  vendorId: {item?.vendorId}
                </Text>
              </View>
              <View style={styles.datadescription}>
                <Text style={styles.description}> Description:</Text>
                <Html style={styles.htmlData}>{item?.description}</Html>
              </View>
              <View style={styles.flexData}>
                <Text style={styles.globalFont}>Address: {item?.address}</Text>
              </View>
              <View style={styles.flexData}>
                <Text style={styles.globalFont}>
                  MemberShip: {item?.memberShip}
                </Text>
              </View>
              {item?.duration && item?.duration?.length > 0 && (
                <View style={styles.flexData}>
                  <Text style={styles.globalFont}>Durations:</Text>
                  <View>
                    {item?.duration?.map((singleItem, ind) => (
                      <Text key={ind} style={styles.globalFont}>
                        {singleItem}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
              {item?.storyLineKeywords &&
                item?.storyLineKeywords?.length > 0 && (
                  <View style={styles.flexData}>
                    <Text style={styles.globalFont}>StoryLine Keywords:</Text>
                    <View>
                      {item?.storyLineKeywords?.map((singleItem, ind) => (
                        <Text key={ind} style={styles.globalFont}>
                          {singleItem}
                        </Text>
                      ))}
                    </View>
                  </View>
                )}
              {item?.price && item?.price?.length > 0 && (
                <View style={styles.flexData}>
                  <Text style={styles.globalFont}>Prices:</Text>
                  <View>
                    {item?.price?.map((singleItem, ind) => (
                      <Text key={ind} style={styles.globalFont}>
                        {singleItem}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
              {item?.linkWithOtherExperience &&
                item?.linkWithOtherExperience?.length > 0 && (
                  <View style={styles.flexData}>
                    <Text style={styles.globalFont}>Other Experiences:</Text>
                    <View>
                      {item?.linkWithOtherExperience?.map((singleItem, ind) => (
                        <View key={ind}>
                          <View style={styles.flexData}>
                            <Text style={styles.globalFont}>
                              ExperienceId: {singleItem?.experienceId}
                            </Text>
                          </View>
                          <View style={styles.flexData}>
                            <Text style={styles.globalFont}>
                              ExperienceName: {singleItem?.experienceName}
                            </Text>
                          </View>
                          <View style={styles.flexData}>
                            <Text style={styles.globalFont}>
                              Why: {singleItem?.why}
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
