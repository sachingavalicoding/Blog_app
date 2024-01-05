import * as z from "zod";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { CreateUserAccount } from "@/server/api";

const SignupForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = CreateUserAccount(values);
    console.log(newUser);
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex items-center justify-center flex-col ">
        <img src="/assets/images/logo.svg" alt="sign-up logo" />
        <h2 className="text-xl font-bold pt-5"> Create an Account </h2>
        <p className="font-medium text-gray-400 mt-2">
          {" "}
          to use Classroom Enter please Your Details{" "}
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col gap-1 mt-4 w-full "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    placeholder="Name.... "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    placeholder="Username.... "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="shad-input"
                    placeholder="Email.... "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="shad-input"
                    placeholder="Email.... "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-2">
                {" "}
                Loading <Loader />{" "}
              </div>
            ) : (
              "Sign-ups"
            )}
          </Button>
          <p className="text-center text-light-2 mt-2 text-small-regular">
            {" "}
            Already have an account ?
            <Link to="/sign-in" className="text-primary-600 font-bold px-2">
              {" "}
              Sign -in{" "}
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
