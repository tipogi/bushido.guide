import axios from "axios";
import { TIMEOUT } from "dns";
import { forEach } from "lodash";
import { useCallback, useState } from "react";
import { HEALTH_STATUS, REST_SERVER } from "~/constants";

export default function useHealthCheck() {
  const [loading, setLoading] = useState(false);

  const [healthStatus, setHealthStatus] = useState(HEALTH_STATUS.NEUTRAL);

  const checkHealthStatus = useCallback(async() => {

    const setNeutralState = () => {
      setTimeout(() => {
        setHealthStatus(HEALTH_STATUS.NEUTRAL)
      }, 8000)
    }

    setLoading(true);
    try {
    await axios.get(`${REST_SERVER}/healthcheck`);
      setHealthStatus(HEALTH_STATUS.HEALTHY)
      setNeutralState()
    } catch (error) {
      setHealthStatus(HEALTH_STATUS.DOWN)
      setNeutralState()
      //@ts-ignore
      forEach(error.response.data.details, (service, key) => {
        console.log(`service ${key} has status of ${service.status}`)
      })
    }
    setLoading(false)
  }, [])

  return { loading, healthStatus, checkHealthStatus }
}