import { ActionFunction, LoaderFunction, redirect } from "remix";
import { logout } from "~/utils/session.server";

export let action: ActionFunction = ({request}) => logout(request)

export let loader: LoaderFunction = () => redirect("/")