

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { supabaseClient } from "../../../utils/authHelpers";

const DashboardPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.refresh();
    setUser(null);
  };
  return (
    <div>Este es el dashboard</div>
  )
}

export default DashboardPage