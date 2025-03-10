export type WakaTimeUserStats = {
    data: {
      id: string;
      user_id: string;
      range: string;
      timeout: number;
      writes_only: boolean;
      holidays: number;
      status: string;
      human_readable_total: string;
      human_readable_daily_average_including_other_language: string;
      operating_systems: {
        total_seconds: number;
        name: string;
        percent: number;
        digital: string;
        decimal: string;
        text: string;
        hours: number;
        minutes: number;
      }[];
      languages: {
        name: string;
        total_seconds: number;
        percent: number;
        digital: string;
        decimal: string;
        text: string;
        hours: number;
        minutes: number;
      }[];
      total_seconds: number;
      human_readable_daily_average: string;
      days_minus_holidays: number;
      daily_average: number;
      is_up_to_date: boolean;
      is_already_updating: boolean;
      editors: {
        total_seconds: number;
        name: string;
        percent: number;
        digital: string;
        decimal: string;
        text: string;
        hours: number;
        minutes: number;
      }[];
      total_seconds_including_other_language: number;
      percent_calculated: number;
      daily_average_including_other_language: number;
      human_readable_total_including_other_language: string;
      days_including_holidays: number;
      is_stuck: boolean;
      is_up_to_date_pending_future: boolean;
      is_cached: boolean;
      username: string;
      is_including_today: boolean;
      human_readable_range: string;
      is_coding_activity_visible: boolean;
      is_language_usage_visible: boolean;
      is_editor_usage_visible: boolean;
      is_category_usage_visible: boolean;
      is_os_usage_visible: boolean;
    };
  };
  