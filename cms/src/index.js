"use strict";

module.exports = {
  register() {},
  async bootstrap({ strapi }) {
    const adminCount = await strapi.query("admin::user").count();
    if (adminCount === 0) {
      const superAdminRole = await strapi
        .query("admin::role")
        .findOne({ where: { code: "strapi-super-admin" } });

      if (superAdminRole) {
        const hashedPassword = await strapi.admin.services.auth.hashPassword(
          "Admin123!@#"
        );
        await strapi.query("admin::user").create({
          data: {
            firstname: "Admin",
            lastname: "AMAK",
            email: "admin@amak.studio",
            password: hashedPassword,
            isActive: true,
            blocked: false,
            roles: [superAdminRole.id],
          },
        });
        strapi.log.info("Default admin user created: admin@amak.studio");
      }
    }

    const publicRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({ where: { type: "public" } });

    if (!publicRole) return;

    const permissions = await strapi
      .query("plugin::users-permissions.permission")
      .findMany({ where: { role: publicRole.id } });

    const existingActions = permissions.map((p) => p.action);

    const requiredPermissions = [
      "api::case.case.find",
      "api::case.case.findOne",
      "api::homepage.homepage.find",
      "api::cases-page.cases-page.find",
    ];

    for (const action of requiredPermissions) {
      if (!existingActions.includes(action)) {
        await strapi.query("plugin::users-permissions.permission").create({
          data: {
            action,
            role: publicRole.id,
          },
        });
        strapi.log.info(`Public permission granted: ${action}`);
      }
    }
  },
};
