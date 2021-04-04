using System;
using System.Collections.Generic;
using Web.API.Models.Db;
using Xunit;

namespace Web.API.Tests
{
    public class TestController
    {
            [Fact]
            public void GetAllClients_ShouldReturnAllClients()
            {
                // Arrange

                // Act

                // Assert

            }

            private List<Cliente> GetTestClients()
            {
                var testClients = new List<Cliente>();
                testClients.Add(new Cliente { Id = 1, Email = "Demo1", Idade = 45 });
                testClients.Add(new Cliente { Id = 2, Email = "Demo2", Idade = 34 });
                testClients.Add(new Cliente { Id = 3, Email = "Demo3", Idade = 23 });
                testClients.Add(new Cliente { Id = 4, Email = "Demo4", Idade = 18 });

                return testClients;
            }
    }
}
