import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ONE_USER } from "Apollo/users";
import { Stack, Typography, Divider } from "@mui/material";
import { Loading } from "common/components";
import { palette } from "theme";

export const DetailUserFeature = () => {
  const { paramsId } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_USER, {
    variables: { id: Number(paramsId) },
  });

  if (loading) return <Loading />;

  if (error) return <Typography>...error</Typography>;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "calc(100vh - 250px)" }}
    >
      <Stack direction="column">
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
            width: "400px",
            height: "120px",
            borderRadius: "10px",
            position: "relative",
            border: `2px solid ${palette.grey[300]}`,
            padding: "10px 20px",
          }}
        >
          <Typography variant="h3" fontWeight={700}>
            First Name: {data.user.profile.firstName}
          </Typography>
          <Divider
            variant="inset"
            color={palette.grey[300]}
            sx={{
              position: "absolute",
              height: "2px",
              width: "50%",
              top: "calc((120px - 2px) / 2)",
              transform: "translate(40%)",
              zIndex: "1",
            }}
          />
          <Typography variant="h3" fontWeight={700}>
            Last Name: {data.user.profile.lastName}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          background: palette.grey[300],
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          position: "relative",
          transform: "translate(-50%)",
          border: `10px solid ${palette.bodyBackground.main}`,
        }}
      >
        {data.user.profile.id}
      </Stack>
    </Stack>
  );
};
