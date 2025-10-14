class DBConnectionPool {
  // 🔒 Private static fields
  static #pool = [];
  static #inUse = new Set();
  static #nextId = 1;

  // 🌍 Public static field
  static maxConnections = 5;

  // 🧩 Static initialization block
  static {
    console.log("Initializing DB connection pool...");
    for (let i = 0; i < DBConnectionPool.maxConnections; i++) {
      DBConnectionPool.#pool.push(DBConnectionPool.#createConnection());
    }
    console.log(`Pool ready with ${DBConnectionPool.#pool.length} connections`);
  }

  // 🔒 Private static method: creates a mock DB connection
  static #createConnection() {
    const id = DBConnectionPool.#nextId++;
    return { id, status: "available", createdAt: new Date() };
  }

  // 🧰 Public static method: borrow a connection
  static getConnection() {
    if (DBConnectionPool.#pool.length === 0) {
      throw new Error("No available connections. Try again later.");
    }

    const conn = DBConnectionPool.#pool.pop();
    conn.status = "in-use";
    DBConnectionPool.#inUse.add(conn);

    console.log(`🔗 Connection ${conn.id} acquired.`);
    return conn;
  }

  // 🧹 Public static method: release a connection back to the pool
  static releaseConnection(conn) {
    if (!DBConnectionPool.#inUse.has(conn)) {
      throw new Error("Invalid or already released connection.");
    }

    conn.status = "available";
    DBConnectionPool.#inUse.delete(conn);
    DBConnectionPool.#pool.push(conn);

    console.log(`♻️ Connection ${conn.id} released.`);
  }

  // 🕵️ Public static method: view status
  static status() {
    console.log(`Total: ${DBConnectionPool.maxConnections}`);
    console.log(`Available: ${DBConnectionPool.#pool.length}`);
    console.log(`In Use: ${DBConnectionPool.#inUse.size}`);
  }
}

// ---- Usage Example ----
try {
  const conn1 = DBConnectionPool.getConnection();
  const conn2 = DBConnectionPool.getConnection();

  DBConnectionPool.status();

  // simulate work
  setTimeout(() => {
    DBConnectionPool.releaseConnection(conn1);
    DBConnectionPool.status();
  }, 1000);

} catch (err) {
  console.error(err.message);
}
