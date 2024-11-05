// hooks/useRole.js
"use client";

import { getUserRole } from "@/lib";
// Adjust path as needed
import { useEffect, useState } from "react";

const useRole = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      setLoading(true);
      const fetchedRole = await getUserRole();
      setRole(fetchedRole);
      setLoading(false);
    };

    fetchRole();
  }, []);

  return [role, loading];
};

export default useRole;
