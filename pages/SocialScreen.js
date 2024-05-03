import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import ReviewCard from "../components/ReviewCard";
import HeaderWithBtns from "../components/HeaderWithBtns";
import PromotionComponent from "../components/PromotionComponent";
import ConnectCard from "../components/ConnectCard";

const SocialScreen = ({navigation, route}) => {
  const [selectedBtn, setSelectedBtn] = useState(route.params?.initialTab || "Cafés");

  const renderContent = () => {
    switch (selectedBtn) {
      case "Cafés":
        // Return components for the Cafés tab
        return (
          <ScrollView style={styles.scrollView}>
            <PromotionComponent
              cafe="B Cup Cafe"
              date="Friday, May 3"
              rating="4.4"
              offer="20% off all iced coffees to celebrate the start of summer. Valid through May 5"
              imguri="https://i.pinimg.com/564x/02/c3/87/02c387d209309fd3931d3a4912e7592e.jpg"
              pfpuri="https://images.squarespace-cdn.com/content/63f8cb8fdbfffc49144098f0/ded487a9-9bc9-4ece-96da-04be7d9a425c/BCup_logo.png?content-type=image%2Fpng"
            />
            <PromotionComponent
              cafe="Elixr Coffee"
              date="Wednesday, May 1"
              rating="4.1"
              offer="Stop by from 1:00-3:00pm for 50% off all pastries!"
              imguri="https://i.pinimg.com/originals/4a/58/a8/4a58a8cbd92b082f765f9d35a1e68e92.jpg"
              pfpuri="https://i.pinimg.com/736x/3b/85/55/3b85555f344168caa93323a67c79ccbb.jpg"
            />
          </ScrollView>
        ); // Placeholder for your Café content
      case "Friends":
        // Return components for the Friends tab
        return (
          <ScrollView style={styles.scrollView}>
            <ReviewCard
              name="Kayla Simpson"
              cafe="Elixr Coffee"
              review="Coffee was pretty good! Would not recommend their pastries though.
          Spend a good 3hrs studying here and had a pretty productive sesh:)
          Wish me luck for midterms tmrw."
              rating="4.5"
              date="May 1, 2024 at 1:06pm"
            />
            <ReviewCard
              name="Namita Sajai"
              cafe="Elixr Coffee"
              review="Absolutely loved the cozy atmosphere! The espresso was top-notch, exactly what I needed to kickstart my day. 
              The staff was super friendly, making the visit even more enjoyable. Managed to finish a couple of chapters of my book 
              thanks to the peaceful vibe. Fingers crossed for my upcoming presentation!"
              rating="4.8"
              date="April 4, 2024 at 8:27am"
            />
            <ReviewCard
              name="Sabine Mejia"
              cafe="Elixr Coffee"
              review="This place has a fantastic selection of herbal teas which was a delightful 
              surprise. I spent a few hours here catching up on work emails and it was quiet enough 
              without being too silent. Their sandwiches are decent but the cakes are a bit too sweet
               for my taste. Looking forward to coming back next week for another productive afternoon."
              rating="4.0"
              date="March 31, 2024 at 3:58pm"
            />
          </ScrollView>
        );
      case "Connect":
        return (
          <ScrollView style={styles.scrollView}>
            <ConnectCard
              name="You"
              working="are working at"
              cafeName="Java Lava"
              rating="4.5"
              date="2 seconds ago"
            />
            <ConnectCard
              name="Kayla Simpson"
              working="is working at"
              cafeName="B Cup Cafe"
              text="midterm season :/"
              rating="4.5"
              date="May 1, 2024 at 1:06pm"
            />
          </ScrollView>
        );
      default:
        return <ReviewCard />; // Default case
    }
  };

  return (
    <View style={styles.container}>
      <HeaderWithBtns
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
      />
      <ScrollView style={styles.scrollView}>{renderContent()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    backgroundColor: "#FBF8F1", // Use the background color that suits your theme
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_400Regular",
    color: "#333333",
    marginHorizontal: 0, // Provides horizontal space
    marginTop: 18, // Provides space from the top
  },
  scrollView: {
    display: "flex",
    gap: 12,
    paddingHorizontal: 10, // Provides horizontal space
    paddingVertical: 10,
  },
});

export default SocialScreen;
