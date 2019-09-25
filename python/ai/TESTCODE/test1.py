import matplotlib.pyplot as plt
import pandas as pd
import pymysql


class test1():
    def __init__(self, *args):
        self.user = args[0]
        self.pwd = args[1]

    def get_db_data(self, sql):
        """
        从数据库读取文件
        :param sql: sql查询语句
        :param user: 数据库用户名
        :param pwd: 数据库密码
        :return: 返回查询结果
        EXAMPLE: ROW_DATA=self.get_db_data("select * from table","USER","PWD")
        """
        conn = pymysql.connect(host="127.0.0.1", user=self.user, passwd=self.pwd, db="mathmatch", charset="utf8")
        sql_query = sql
        result = pd.read_sql(sql_query, con=conn)
        conn.close()
        return result

    def main_process(self):
        df = self.get_db_data("select 时间,GPS车速 from table1 limit 0,5000")
        df['时间'] = pd.to_datetime(df['时间'])
        for i, row in df.iterrows():
            plt.scatter(i,row['GPS车速'],color="red",linewidths=2)
        plt.show()


if __name__ == '__main__':
    t = test1("michael", "cccbbb")
    t.main_process()
