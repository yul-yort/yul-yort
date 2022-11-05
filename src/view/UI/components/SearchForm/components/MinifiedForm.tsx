import { FC } from "react";
import { Button, LinearProgress, Paper, Typography } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { IMinifiedForm } from "../types";
import css from "./styles/minifiedForm.module.scss";
import cn from "classnames";

export const MinifiedForm: FC<IMinifiedForm> = ({
  loading = false,
  origin,
  destination,
  onExpand,
  className = "",
}) => {
  return (
    <Paper elevation={3} className={cn(css.minifiedWrapper, className)}>
      <div className={css.minifiedRouteWrapper}>
        {!origin || !destination ? (
          <Typography variant="h6" className={css.loadingText}>
            {loading ? "Загрузка..." : "Маршрут не указан"}
          </Typography>
        ) : (
          <div className={css.route}>
            <Typography variant="h6" className={css.title} align="center">
              {origin.name}
            </Typography>

            <ArrowRightAltOutlinedIcon className={css.icon} />

            <Typography variant="h6" className={css.title} align="center">
              {destination.name}
            </Typography>
          </div>
        )}

        <Button
          onClick={onExpand}
          className={css.formButton}
          color="primary"
          variant="outlined"
          size="large"
          disabled={loading}
        >
          Изменить
        </Button>
      </div>

      {loading && <LinearProgress />}
    </Paper>
  );
};
