import {
  BundleMigrationType,
  upgradeHostlessProject,
} from "@/wab/server/db/bundle-migration-utils";
import { UnbundledMigrationFn } from "@/wab/server/db/BundleMigrator";

// migrates plasmic-rich-components, antd5 hostless, plasmic-contentful, plasmic-graphcms, plasmic-basic-components
export const migrate: UnbundledMigrationFn = async (bundle, db, entity) => {
  await upgradeHostlessProject(bundle, entity, db);
};

export const MIGRATION_TYPE: BundleMigrationType = "unbundled";
