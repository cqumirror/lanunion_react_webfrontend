import { api_Users_Me } from "../../hooks/apiList";

export default async function isLogin(): Promise<boolean> {
  try {
    const response = await api_Users_Me();
    return response.status === 200;
  } catch (error) {
    // TODO
    console.error('Error fetching user info:', error);
    throw error;
  }
}