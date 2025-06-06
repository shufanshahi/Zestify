import { useClerk, useUser } from '@clerk/clerk-expo';
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleShowEmail = () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      console.log("Current user email:", user.primaryEmailAddress.emailAddress);
    } else {
      console.log("No email address found");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <TouchableOpacity style={styles.emailButton} onPress={handleShowEmail}>
        <Text style={styles.buttonText}>Show Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2631",
  },
  heading: {
    fontSize: 40, 
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  emailButton: {
    backgroundColor: "#3498DB",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#E74C3C",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
