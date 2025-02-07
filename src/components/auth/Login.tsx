import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Login() {
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Welcome back to Daily.dev</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form action="">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="enter here..."
                  value={authState.email}
                  onChange={(e) =>
                    setAuthState({ ...authState, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="enter password in here..."
                  onChange={(e) =>
                    setAuthState({ ...authState, password: e.target.value })
                  }
                />
              </div>
              <div className="mt-2">
                <Button className="w-full" disabled={loading}>
                  {loading ? "Processing.." : "Login"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </div>
  );
}
