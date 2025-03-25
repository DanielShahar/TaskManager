import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

class LoginController {
  // Attempt to log in user with email and password, now returns a promise that resolves with the user's token.
  static async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<{ success: boolean; token?: string; error?: Error; message: string }> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken(); // Get the JWT

      return {
        success: true,
        token: token, // Return the JWT
        message: "Login successful",
      };
    } catch (error) {
        if(error instanceof Error){
            return {
                success: false,
                error: error,
                message: "Login is not successful. Please check your credentials.",
            };
        } else {
            return {
                success: false,
                message: "An unexpected error occurred.",
            };
        }
    }
  }

  // Validate login form data
  static validateLoginData(
    email: string,
    password: string
  ): { isValid: boolean; message: string } {
    if (!email || !password) {
      return {
        isValid: false,
        message: "Please fill in all fields.",
      };
    }
    return {
      isValid: true,
      message: "",
    };
  }
}

export default LoginController;