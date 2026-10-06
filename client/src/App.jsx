import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import { HomePage } from "./pages/HomePage";
import { TripResultsPage } from "./pages/TripResultsPage";
import { ExplorePage } from "./pages/ExplorePage";
import { HotelsPage } from "./pages/HotelsPage";
import { TransportationPage } from "./pages/TransportationPage";
import { MyTripsPage } from "./pages/MyTripsPage";
import { AIAssistantPage } from "./pages/AIAssistantPage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { DestinationDetailsPage } from "./pages/DestinationDetailsPage";
import { PaymentSuccessPage } from "./pages/PaymentSuccessPage";
import { RazorpayCheckoutDemoPage } from "./pages/RazorpayCheckoutDemoPage";
import { AuthCallbackPage } from "./pages/AuthCallbackPage";
import { useSearchParams } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";

function HomePageRoute() {
  const [searchParams] = useSearchParams();
  if (searchParams.get("code") || searchParams.get("error")) {
    return <AuthCallbackPage />;
  }
  return <HomePage />;
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
          {/* Navigation Bar */}
          <Navbar />

          {/* Dynamic Page Content */}
          <main className="flex-1">
            <Routes>
              {/* Public Routes (Stage 3 Destination Discovery & Search) */}
              <Route path="/" element={<HomePageRoute />} />
              <Route path="/destinations" element={<ExplorePage />} />
              <Route path="/destinations/:id" element={<DestinationDetailsPage />} />
              <Route path="/search" element={<TripResultsPage />} />
              <Route path="/plan-trip" element={<TripResultsPage />} />
              <Route path="/trip-results" element={<TripResultsPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/transportation" element={<TransportationPage />} />
              <Route path="/ai-assistant" element={<AIAssistantPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<LoginPage initialMode="forgot_email" />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/auth/callback" element={<AuthCallbackPage />} />
              <Route path="/razorpay-checkout" element={<RazorpayCheckoutDemoPage />} />

              {/* Protected Routes (Stage 2 Auth) */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-trips"
                element={
                  <ProtectedRoute>
                    <MyTripsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <TripResultsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/payment-success"
                element={
                  <ProtectedRoute>
                    <PaymentSuccessPage />
                  </ProtectedRoute>
                }
              />

              {/* Admin Protected Route */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminDashboardPage />
                  </ProtectedRoute>
                }
              />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}
